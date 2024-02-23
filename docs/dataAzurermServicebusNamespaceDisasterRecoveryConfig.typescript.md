# `dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule <a name="`dataAzurermServicebusNamespaceDisasterRecoveryConfig` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

new dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig(scope: Construct, id: string, config: DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig">DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig">DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId">resetAliasAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName">resetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `resetAliasAuthorizationRuleId` <a name="resetAliasAuthorizationRuleId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetAliasAuthorizationRuleId"></a>

```typescript
public resetAliasAuthorizationRuleId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetNamespaceName` <a name="resetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetNamespaceName"></a>

```typescript
public resetNamespaceName(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusNamespaceDisasterRecoveryConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey">defaultPrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey">defaultSecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId">partnerNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias">primaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias">secondaryConnectionStringAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput">aliasAuthorizationRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput">namespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `defaultPrimaryKey`<sup>Required</sup> <a name="defaultPrimaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultPrimaryKey"></a>

```typescript
public readonly defaultPrimaryKey: string;
```

- *Type:* string

---

##### `defaultSecondaryKey`<sup>Required</sup> <a name="defaultSecondaryKey" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.defaultSecondaryKey"></a>

```typescript
public readonly defaultSecondaryKey: string;
```

- *Type:* string

---

##### `partnerNamespaceId`<sup>Required</sup> <a name="partnerNamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.partnerNamespaceId"></a>

```typescript
public readonly partnerNamespaceId: string;
```

- *Type:* string

---

##### `primaryConnectionStringAlias`<sup>Required</sup> <a name="primaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.primaryConnectionStringAlias"></a>

```typescript
public readonly primaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `secondaryConnectionStringAlias`<sup>Required</sup> <a name="secondaryConnectionStringAlias" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.secondaryConnectionStringAlias"></a>

```typescript
public readonly secondaryConnectionStringAlias: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference</a>

---

##### `aliasAuthorizationRuleIdInput`<sup>Optional</sup> <a name="aliasAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleIdInput"></a>

```typescript
public readonly aliasAuthorizationRuleIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceNameInput"></a>

```typescript
public readonly namespaceNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---

##### `aliasAuthorizationRuleId`<sup>Required</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.aliasAuthorizationRuleId"></a>

```typescript
public readonly aliasAuthorizationRuleId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

const dataAzurermServicebusNamespaceDisasterRecoveryConfigConfig: dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId">aliasAuthorizationRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName">namespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}.

---

##### `aliasAuthorizationRuleId`<sup>Optional</sup> <a name="aliasAuthorizationRuleId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.aliasAuthorizationRuleId"></a>

```typescript
public readonly aliasAuthorizationRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}.

---

##### `namespaceName`<sup>Optional</sup> <a name="namespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}

---

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

const dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts: dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference <a name="DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermServicebusNamespaceDisasterRecoveryConfig } from '@cdktf/provider-azurerm'

new dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermServicebusNamespaceDisasterRecoveryConfig.DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts">DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts</a>

---



