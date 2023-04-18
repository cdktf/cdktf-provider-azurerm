# `azurerm_data_factory_linked_service_azure_function`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_linked_service_azure_function`](https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function).

# `dataFactoryLinkedServiceAzureFunction` Submodule <a name="`dataFactoryLinkedServiceAzureFunction` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceAzureFunction <a name="DataFactoryLinkedServiceAzureFunction" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function azurerm_data_factory_linked_service_azure_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig">DataFactoryLinkedServiceAzureFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig">DataFactoryLinkedServiceAzureFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey">putKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName">resetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey">resetKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putKeyVaultKey` <a name="putKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey"></a>

```typescript
public putKeyVaultKey(value: DataFactoryLinkedServiceAzureFunctionKeyVaultKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putKeyVaultKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: DataFactoryLinkedServiceAzureFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

---

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationRuntimeName` <a name="resetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetIntegrationRuntimeName"></a>

```typescript
public resetIntegrationRuntimeName(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetKeyVaultKey` <a name="resetKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetKeyVaultKey"></a>

```typescript
public resetKeyVaultKey(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey">keyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput">annotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput">dataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput">integrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput">keyVaultKeyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations">annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyVaultKey`<sup>Required</sup> <a name="keyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKey"></a>

```typescript
public readonly keyVaultKey: DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference">DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference">DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference</a>

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: string[];
```

- *Type:* string[]

---

##### `dataFactoryIdInput`<sup>Optional</sup> <a name="dataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryIdInput"></a>

```typescript
public readonly dataFactoryIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationRuntimeNameInput`<sup>Optional</sup> <a name="integrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeNameInput"></a>

```typescript
public readonly integrationRuntimeNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `keyVaultKeyInput`<sup>Optional</sup> <a name="keyVaultKeyInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.keyVaultKeyInput"></a>

```typescript
public readonly keyVaultKeyInput: DataFactoryLinkedServiceAzureFunctionKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataFactoryLinkedServiceAzureFunctionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a> | cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationRuntimeName`<sup>Required</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceAzureFunctionConfig <a name="DataFactoryLinkedServiceAzureFunctionConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceAzureFunctionConfig: dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId">dataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations">annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName">integrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey">keyVaultKey</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | key_vault_key block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFactoryId`<sup>Required</sup> <a name="dataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.dataFactoryId"></a>

```typescript
public readonly dataFactoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#data_factory_id DataFactoryLinkedServiceAzureFunction#data_factory_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#name DataFactoryLinkedServiceAzureFunction#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#url DataFactoryLinkedServiceAzureFunction#url}.

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#additional_properties DataFactoryLinkedServiceAzureFunction#additional_properties}.

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.annotations"></a>

```typescript
public readonly annotations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#annotations DataFactoryLinkedServiceAzureFunction#annotations}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#description DataFactoryLinkedServiceAzureFunction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#id DataFactoryLinkedServiceAzureFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationRuntimeName`<sup>Optional</sup> <a name="integrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.integrationRuntimeName"></a>

```typescript
public readonly integrationRuntimeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#integration_runtime_name DataFactoryLinkedServiceAzureFunction#integration_runtime_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#key DataFactoryLinkedServiceAzureFunction#key}.

---

##### `keyVaultKey`<sup>Optional</sup> <a name="keyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.keyVaultKey"></a>

```typescript
public readonly keyVaultKey: DataFactoryLinkedServiceAzureFunctionKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

key_vault_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#key_vault_key DataFactoryLinkedServiceAzureFunction#key_vault_key}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#parameters DataFactoryLinkedServiceAzureFunction#parameters}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataFactoryLinkedServiceAzureFunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#timeouts DataFactoryLinkedServiceAzureFunction#timeouts}

---

### DataFactoryLinkedServiceAzureFunctionKeyVaultKey <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKey" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceAzureFunctionKeyVaultKey: dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName">secretName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}. |

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#linked_service_name DataFactoryLinkedServiceAzureFunction#linked_service_name}.

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#secret_name DataFactoryLinkedServiceAzureFunction#secret_name}.

---

### DataFactoryLinkedServiceAzureFunctionTimeouts <a name="DataFactoryLinkedServiceAzureFunctionTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

const dataFactoryLinkedServiceAzureFunctionTimeouts: dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#create DataFactoryLinkedServiceAzureFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#delete DataFactoryLinkedServiceAzureFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#read DataFactoryLinkedServiceAzureFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_function#update DataFactoryLinkedServiceAzureFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference <a name="DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput">linkedServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName">linkedServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkedServiceNameInput`<sup>Optional</sup> <a name="linkedServiceNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceNameInput"></a>

```typescript
public readonly linkedServiceNameInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `linkedServiceName`<sup>Required</sup> <a name="linkedServiceName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.linkedServiceName"></a>

```typescript
public readonly linkedServiceName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceAzureFunctionKeyVaultKey;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionKeyVaultKey">DataFactoryLinkedServiceAzureFunctionKeyVaultKey</a>

---


### DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference <a name="DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataFactoryLinkedServiceAzureFunction } from '@cdktf/provider-azurerm'

new dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataFactoryLinkedServiceAzureFunctionTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceAzureFunction.DataFactoryLinkedServiceAzureFunctionTimeouts">DataFactoryLinkedServiceAzureFunctionTimeouts</a> | cdktf.IResolvable

---



