# `dataAzurermRoleManagementPolicy` Submodule <a name="`dataAzurermRoleManagementPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermRoleManagementPolicy <a name="DataAzurermRoleManagementPolicy" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy azurerm_role_management_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy(scope: Construct, id: string, config: DataAzurermRoleManagementPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig">DataAzurermRoleManagementPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig">DataAzurermRoleManagementPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermRoleManagementPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermRoleManagementPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isConstruct"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformElement"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformDataSource"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermRoleManagementPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermRoleManagementPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermRoleManagementPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermRoleManagementPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.activationRules">activationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList">DataAzurermRoleManagementPolicyActivationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.activeAssignmentRules">activeAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList">DataAzurermRoleManagementPolicyActiveAssignmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.eligibleAssignmentRules">eligibleAssignmentRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList">DataAzurermRoleManagementPolicyEligibleAssignmentRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList">DataAzurermRoleManagementPolicyNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference">DataAzurermRoleManagementPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.scope">scope</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `activationRules`<sup>Required</sup> <a name="activationRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.activationRules"></a>

```typescript
public readonly activationRules: DataAzurermRoleManagementPolicyActivationRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList">DataAzurermRoleManagementPolicyActivationRulesList</a>

---

##### `activeAssignmentRules`<sup>Required</sup> <a name="activeAssignmentRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.activeAssignmentRules"></a>

```typescript
public readonly activeAssignmentRules: DataAzurermRoleManagementPolicyActiveAssignmentRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList">DataAzurermRoleManagementPolicyActiveAssignmentRulesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eligibleAssignmentRules`<sup>Required</sup> <a name="eligibleAssignmentRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.eligibleAssignmentRules"></a>

```typescript
public readonly eligibleAssignmentRules: DataAzurermRoleManagementPolicyEligibleAssignmentRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList">DataAzurermRoleManagementPolicyEligibleAssignmentRulesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.notificationRules"></a>

```typescript
public readonly notificationRules: DataAzurermRoleManagementPolicyNotificationRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList">DataAzurermRoleManagementPolicyNotificationRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRoleManagementPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference">DataAzurermRoleManagementPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.roleDefinitionIdInput"></a>

```typescript
public readonly roleDefinitionIdInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermRoleManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermRoleManagementPolicyActivationRules <a name="DataAzurermRoleManagementPolicyActivationRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRules.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyActivationRules: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRules = { ... }
```


### DataAzurermRoleManagementPolicyActivationRulesApprovalStage <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStage" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStage.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyActivationRulesApprovalStage: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStage = { ... }
```


### DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover = { ... }
```


### DataAzurermRoleManagementPolicyActiveAssignmentRules <a name="DataAzurermRoleManagementPolicyActiveAssignmentRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRules.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyActiveAssignmentRules: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRules = { ... }
```


### DataAzurermRoleManagementPolicyConfig <a name="DataAzurermRoleManagementPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyConfig: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>string</code> | ID of the Azure Role to which this policy is assigned. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.scope">scope</a></code> | <code>string</code> | The scope of the role to which this policy will apply. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#id DataAzurermRoleManagementPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.roleDefinitionId"></a>

```typescript
public readonly roleDefinitionId: string;
```

- *Type:* string

ID of the Azure Role to which this policy is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#role_definition_id DataAzurermRoleManagementPolicy#role_definition_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The scope of the role to which this policy will apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#scope DataAzurermRoleManagementPolicy#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#id DataAzurermRoleManagementPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermRoleManagementPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#timeouts DataAzurermRoleManagementPolicy#timeouts}

---

### DataAzurermRoleManagementPolicyEligibleAssignmentRules <a name="DataAzurermRoleManagementPolicyEligibleAssignmentRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRules.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyEligibleAssignmentRules: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRules = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRules <a name="DataAzurermRoleManagementPolicyNotificationRules" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRules.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRules: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRules = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesActiveAssignments: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleActivations: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications = { ... }
```


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications = { ... }
```


### DataAzurermRoleManagementPolicyTimeouts <a name="DataAzurermRoleManagementPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

const dataAzurermRoleManagementPolicyTimeouts: dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#read DataAzurermRoleManagementPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.0/docs/data-sources/role_management_policy#read DataAzurermRoleManagementPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermRoleManagementPolicyActivationRulesApprovalStageList <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStageList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover">primaryApprover</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStage">DataAzurermRoleManagementPolicyActivationRulesApprovalStage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryApprover`<sup>Required</sup> <a name="primaryApprover" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.primaryApprover"></a>

```typescript
public readonly primaryApprover: DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList">DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyActivationRulesApprovalStage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStage">DataAzurermRoleManagementPolicyActivationRulesApprovalStage</a>

---


### DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference <a name="DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApproverOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover">DataAzurermRoleManagementPolicyActivationRulesApprovalStagePrimaryApprover</a>

---


### DataAzurermRoleManagementPolicyActivationRulesList <a name="DataAzurermRoleManagementPolicyActivationRulesList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyActivationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyActivationRulesOutputReference <a name="DataAzurermRoleManagementPolicyActivationRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.approvalStage">approvalStage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList">DataAzurermRoleManagementPolicyActivationRulesApprovalStageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireApproval">requireApproval</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext">requiredConditionalAccessAuthenticationContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireJustification">requireJustification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo">requireTicketInfo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRules">DataAzurermRoleManagementPolicyActivationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approvalStage`<sup>Required</sup> <a name="approvalStage" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.approvalStage"></a>

```typescript
public readonly approvalStage: DataAzurermRoleManagementPolicyActivationRulesApprovalStageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesApprovalStageList">DataAzurermRoleManagementPolicyActivationRulesApprovalStageList</a>

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

---

##### `requireApproval`<sup>Required</sup> <a name="requireApproval" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireApproval"></a>

```typescript
public readonly requireApproval: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requiredConditionalAccessAuthenticationContext`<sup>Required</sup> <a name="requiredConditionalAccessAuthenticationContext" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requiredConditionalAccessAuthenticationContext"></a>

```typescript
public readonly requiredConditionalAccessAuthenticationContext: string;
```

- *Type:* string

---

##### `requireJustification`<sup>Required</sup> <a name="requireJustification" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireJustification"></a>

```typescript
public readonly requireJustification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireMultifactorAuthentication`<sup>Required</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireTicketInfo`<sup>Required</sup> <a name="requireTicketInfo" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyActivationRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActivationRules">DataAzurermRoleManagementPolicyActivationRules</a>

---


### DataAzurermRoleManagementPolicyActiveAssignmentRulesList <a name="DataAzurermRoleManagementPolicyActiveAssignmentRulesList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference <a name="DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired">expirationRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter">expireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification">requireJustification</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication">requireMultifactorAuthentication</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo">requireTicketInfo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRules">DataAzurermRoleManagementPolicyActiveAssignmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationRequired`<sup>Required</sup> <a name="expirationRequired" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

---

##### `requireJustification`<sup>Required</sup> <a name="requireJustification" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireJustification"></a>

```typescript
public readonly requireJustification: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireMultifactorAuthentication`<sup>Required</sup> <a name="requireMultifactorAuthentication" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireMultifactorAuthentication"></a>

```typescript
public readonly requireMultifactorAuthentication: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requireTicketInfo`<sup>Required</sup> <a name="requireTicketInfo" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.requireTicketInfo"></a>

```typescript
public readonly requireTicketInfo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyActiveAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyActiveAssignmentRules">DataAzurermRoleManagementPolicyActiveAssignmentRules</a>

---


### DataAzurermRoleManagementPolicyEligibleAssignmentRulesList <a name="DataAzurermRoleManagementPolicyEligibleAssignmentRulesList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference <a name="DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired">expirationRequired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter">expireAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRules">DataAzurermRoleManagementPolicyEligibleAssignmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationRequired`<sup>Required</sup> <a name="expirationRequired" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expirationRequired"></a>

```typescript
public readonly expirationRequired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expireAfter`<sup>Required</sup> <a name="expireAfter" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.expireAfter"></a>

```typescript
public readonly expireAfter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyEligibleAssignmentRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyEligibleAssignmentRules">DataAzurermRoleManagementPolicyEligibleAssignmentRules</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAdminNotificationsList</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsApproverNotificationsList</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsAssigneeNotificationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignments</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAdminNotificationsList</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsApproverNotificationsList</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsAssigneeNotificationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivations</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients">additionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients">defaultRecipients</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel">notificationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalRecipients`<sup>Required</sup> <a name="additionalRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.additionalRecipients"></a>

```typescript
public readonly additionalRecipients: string[];
```

- *Type:* string[]

---

##### `defaultRecipients`<sup>Required</sup> <a name="defaultRecipients" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.defaultRecipients"></a>

```typescript
public readonly defaultRecipients: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `notificationLevel`<sup>Required</sup> <a name="notificationLevel" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.notificationLevel"></a>

```typescript
public readonly notificationLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotifications</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications">assigneeNotifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAdminNotificationsList</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsApproverNotificationsList</a>

---

##### `assigneeNotifications`<sup>Required</sup> <a name="assigneeNotifications" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.assigneeNotifications"></a>

```typescript
public readonly assigneeNotifications: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsAssigneeNotificationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignments</a>

---


### DataAzurermRoleManagementPolicyNotificationRulesList <a name="DataAzurermRoleManagementPolicyNotificationRulesList" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.get"></a>

```typescript
public get(index: number): DataAzurermRoleManagementPolicyNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermRoleManagementPolicyNotificationRulesOutputReference <a name="DataAzurermRoleManagementPolicyNotificationRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments">activeAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations">eligibleActivations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments">eligibleAssignments</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRules">DataAzurermRoleManagementPolicyNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeAssignments`<sup>Required</sup> <a name="activeAssignments" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.activeAssignments"></a>

```typescript
public readonly activeAssignments: DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList">DataAzurermRoleManagementPolicyNotificationRulesActiveAssignmentsList</a>

---

##### `eligibleActivations`<sup>Required</sup> <a name="eligibleActivations" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.eligibleActivations"></a>

```typescript
public readonly eligibleActivations: DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleActivationsList</a>

---

##### `eligibleAssignments`<sup>Required</sup> <a name="eligibleAssignments" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.eligibleAssignments"></a>

```typescript
public readonly eligibleAssignments: DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList">DataAzurermRoleManagementPolicyNotificationRulesEligibleAssignmentsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermRoleManagementPolicyNotificationRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyNotificationRules">DataAzurermRoleManagementPolicyNotificationRules</a>

---


### DataAzurermRoleManagementPolicyTimeoutsOutputReference <a name="DataAzurermRoleManagementPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermRoleManagementPolicy } from '@cdktf/provider-azurerm'

new dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermRoleManagementPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermRoleManagementPolicy.DataAzurermRoleManagementPolicyTimeouts">DataAzurermRoleManagementPolicyTimeouts</a>

---



