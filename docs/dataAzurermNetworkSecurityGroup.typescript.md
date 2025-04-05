# `dataAzurermNetworkSecurityGroup` Submodule <a name="`dataAzurermNetworkSecurityGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityGroup <a name="DataAzurermNetworkSecurityGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

new dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup(scope: Construct, id: string, config: DataAzurermNetworkSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig">DataAzurermNetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig">DataAzurermNetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNetworkSecurityGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetworkSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermNetworkSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNetworkSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNetworkSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetworkSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule">securityRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `securityRule`<sup>Required</sup> <a name="securityRule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule"></a>

```typescript
public readonly securityRule: DataAzurermNetworkSecurityGroupSecurityRuleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkSecurityGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNetworkSecurityGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityGroupConfig <a name="DataAzurermNetworkSecurityGroupConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

const dataAzurermNetworkSecurityGroupConfig: dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNetworkSecurityGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#timeouts DataAzurermNetworkSecurityGroup#timeouts}

---

### DataAzurermNetworkSecurityGroupSecurityRule <a name="DataAzurermNetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

const dataAzurermNetworkSecurityGroupSecurityRule: dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule = { ... }
```


### DataAzurermNetworkSecurityGroupTimeouts <a name="DataAzurermNetworkSecurityGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

const dataAzurermNetworkSecurityGroupTimeouts: dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityGroupSecurityRuleList <a name="DataAzurermNetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

new dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get"></a>

```typescript
public get(index: number): DataAzurermNetworkSecurityGroupSecurityRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNetworkSecurityGroupSecurityRuleOutputReference <a name="DataAzurermNetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

new dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access">access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">destinationPortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">sourcePortRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```typescript
public readonly access: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationAddressPrefix`<sup>Required</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```typescript
public readonly destinationAddressPrefix: string;
```

- *Type:* string

---

##### `destinationAddressPrefixes`<sup>Required</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```typescript
public readonly destinationAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `destinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```typescript
public readonly destinationApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: string;
```

- *Type:* string

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```typescript
public readonly destinationPortRanges: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```typescript
public readonly sourceAddressPrefix: string;
```

- *Type:* string

---

##### `sourceAddressPrefixes`<sup>Required</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```typescript
public readonly sourceAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `sourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```typescript
public readonly sourceApplicationSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: string;
```

- *Type:* string

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```typescript
public readonly sourcePortRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNetworkSecurityGroupSecurityRule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a>

---


### DataAzurermNetworkSecurityGroupTimeoutsOutputReference <a name="DataAzurermNetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNetworkSecurityGroup } from '@cdktf/provider-azurerm'

new dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNetworkSecurityGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---



